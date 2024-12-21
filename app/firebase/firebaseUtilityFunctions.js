import { db, collection, query, orderBy, limit, getDocs } from "./../firebase.js";

const fetchTopProducts = async () => {
  const productsRef = collection(db, "products");

  const q = query(productsRef, orderBy("dataAdded", "desc"), limit(100));

  const querySnapshot = await getDocs(q);
  const results = [];
  querySnapshot.forEach((doc) => {
    results.push({ id: doc.id, ...doc.data() });
  });

  return results;
};

export { fetchTopProducts };
