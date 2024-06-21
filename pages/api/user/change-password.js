import { getSession } from 'next-auth/client';
import { connectToDatabase } from '../../../lib/db';
import { verifyPassword, hashPassword } from '../../../lib/auth';

const handler = async (req, res) => {
    if (req.method !== 'PATCH') {
        res.status(405).json({ message: 'Method Not Allowed' });
        return;
    }

    const session = await getSession({ req });

    if (!session) {
        res.status(401).json({ message: 'Not authenticated!' });
        return;
    }

    const userEmail = session.user.email;
    const oldPassword = req.body.oldPassword;
    const newPassword = req.body.newPassword;

    let client;
    try {
        client = await connectToDatabase();
    } catch (error) {
        res.status(500).json({ message: 'Could not connect to the database.' });
        return;
    }

    const usersCollection = client.db().collection('users');

    let user;
    try {
        user = await usersCollection.findOne({ email: userEmail });
    } catch (error) {
        client.close();
        res.status(500).json({ message: 'Database query failed.' });
        return;
    }

    if (!user) {
        res.status(404).json({ message: 'User not found!' });
        client.close();
        return;
    }

    const currentPassword = user.password;

    let passwordsAreEqual;
    try {
        passwordsAreEqual = await verifyPassword(oldPassword, currentPassword);
    } catch (error) {
        client.close();
        res.status(500).json({ message: 'Could not verify password.' });
        return;
    }

    let hashedNewPassword;
    try {
        hashedNewPassword = await hashPassword(newPassword);
    } catch (error) {
        client.close();
        res.status(500).json({ message: 'Could not hash the new password.' });
        return;
    }

    try {
        await usersCollection.updateOne(
            { email: userEmail },
            { $set: { password: hashedNewPassword } }
        );
        res.status(200).json({ message: 'Password updated!' });
    } catch (error) {
        res.status(500).json({ message: 'Could not update password.' });
    } finally {
        client.close();
    }
};

export default handler;
