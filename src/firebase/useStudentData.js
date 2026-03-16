import { useEffect, useState, useCallback } from 'react';
import {
  doc, setDoc, onSnapshot, collection, getDocs,
} from 'firebase/firestore';
import { db } from './config';

// Real-time listener for all student data
export function useStudentData() {
  const [data, setData] = useState({});
  const [syncing, setSyncing] = useState(false);

  useEffect(() => {
    const unsub = onSnapshot(collection(db, 'students'), snapshot => {
      const result = {};
      snapshot.forEach(d => {
        result[d.id] = d.data();
      });
      setData(result);
    });
    return unsub;
  }, []);

  const setStatus = useCallback(async (studentName, skillId, status) => {
    setSyncing(true);
    const docId = studentName.replace(/\s+/g, '_');
    const ref = doc(db, 'students', docId);
    try {
      await setDoc(ref, { [skillId]: status }, { merge: true });
    } finally {
      setSyncing(false);
    }
  }, []);

  const getStatus = useCallback((studentName, skillId) => {
    const docId = studentName.replace(/\s+/g, '_');
    return (data[docId] && data[docId][skillId]) || '';
  }, [data]);

  return { data, getStatus, setStatus, syncing };
}
