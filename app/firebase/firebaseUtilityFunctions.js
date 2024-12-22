import { db, collection, query, orderBy, limit, getDocs, where } from "./../firebase.js";

const fetchTopProducts = async () => {
  const productsRef = collection(db, "products");
  
  const q = query(productsRef, limit(100));

  const querySnapshot = await getDocs(q);
  const results = [];
  querySnapshot.forEach((doc) => {
    results.push({ id: doc.id, ...doc.data() });
  });

  console.log("results", results);

  return results;
};

export { fetchTopProducts };
