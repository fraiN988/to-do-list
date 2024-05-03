import { firestore } from "./src/firebaseConfig";

export const addDocument = async (collection: string, data: any) => {
  try {
    await firestore.collection(collection).add(data);
    console.log("Document added successfully.");
  } catch (error) {
    console.error("Error adding document: ", error);
  }
};
