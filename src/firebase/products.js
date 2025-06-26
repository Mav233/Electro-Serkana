import { doc, getDoc, updateDoc, deleteDoc } from "firebase/firestore";
import { db } from "./config";

const COLLECTION_NAME = "products";

export async function getProductById(id) {
    const docRef = doc(db, COLLECTION_NAME, id);
    const snapshot = await getDoc(docRef);
    if (!snapshot.exists()) return null;
    return { id: snapshot.id, ...snapshot.data() };
}

export async function updateProductById(id, data) {
    const docRef = doc(db, COLLECTION_NAME, id);
    await updateDoc(docRef, data);
}

export async function deleteProductById(id) {
    const docRef = doc(db, COLLECTION_NAME, id);
    await deleteDoc(docRef);
}