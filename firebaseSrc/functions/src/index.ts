/**
 * Import function triggers from their respective submodules:
 *
 * import {onCall} from "firebase-functions/v2/https";
 * import {onDocumentWritten} from "firebase-functions/v2/firestore";
 *
 * See a full list of supported triggers at https://firebase.google.com/docs/functions
 */
import {beforeUserCreated} from "firebase-functions/v2/identity";
import {firestore} from "firebase-admin";


beforeUserCreated(async (user) => {
    const userEmail = user.data.email;
    if (userEmail === undefined) {
        return;
    }
    await firestore().collection("ranking").doc(userEmail).set({
        pontuacao: 0,
        user: user.data.displayName,
    });
});
// Start writing functions
// https://firebase.google.com/docs/functions/typescript

// export const helloWorld = onRequest((request, response) => {
//   logger.info("Hello logs!", {structuredData: true});
//   response.send("Hello from Firebase!");
// });
