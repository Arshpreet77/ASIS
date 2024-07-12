const { collection, addDoc, getDocs, getDoc, doc, updateDoc, deleteDoc } = require('firebase/firestore');
const db = require('../firebaseConfig');

const collectionName = 'WantedRecords';

async function addContactHistory(data) {
    const docRef = await addDoc(collection(db, collectionName), data);
    return docRef.id;
}

async function getAllContactHistory() {
    const snapshot = await getDocs(collection(db, collectionName));
    const records = snapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
    return records;
}

async function getContactHistoryById(id) {
    const docRef = doc(db, collectionName, id);
    const docSnap = await getDoc(docRef);
    if (docSnap.exists()) {
        return { id: docSnap.id, ...docSnap.data() };
    } else {
        throw new Error('No such document!');
    }
}

async function updateContactHistory(id, data) {
    const docRef = doc(db, collectionName, id);
    await updateDoc(docRef, data);
}

async function deleteContactHistory(id) {
    const docRef = doc(db, collectionName, id);
    await deleteDoc(docRef);
}

module.exports = {
    addContactHistory,
    getAllContactHistory,
    getContactHistoryById,
    updateContactHistory,
    deleteContactHistory,
};
