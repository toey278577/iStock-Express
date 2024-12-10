import React, { useState } from "react";
import styles from "./Inventory.module.css";
import "bootstrap/dist/css/bootstrap.min.css";

function Inventory() {
  const originalInventory = [
    { id: 1, code: "P001", name: "สินค้า A", quantity: 10, status: "พร้อมใช้งาน" },
    { id: 2, code: "P002", name: "สินค้า B", quantity: 0, status: "หมดสต็อก" },
    { id: 3, code: "P003", name: "สินค้า C", quantity: 5, status: "พร้อมใช้งาน" },
    // ...รายการเพิ่มเติม
  ];

  const [inventory, setInventory] = useState(originalInventory);
  const [searchTerm, setSearchTerm] = useState("");

  // ฟังก์ชันจัดการการค้นหา
  const handleSearch = (term) => {
    if (!term) {
      setInventory(originalInventory); // รีเซ็ตเป็นข้อมูลต้นฉบับถ้าไม่มีคำค้นหา
      return;
    }

    const filteredInventory = originalInventory.filter((item) =>
      item.code.includes(term)
    );
    setInventory(filteredInventory);
  };

  // ฟังก์ชันดูประวัติสินค้า
  const viewProductHistory = (productId) => {
    alert(`ดูประวัติสินค้า: ${productId}`);
  };

  return (
    <div className={styles.content}>
      <h1 className={styles.textTitle}>สินค้าคงคลัง</h1>
      <div className={styles.searchBar}></div>
      <div className={styles.cardHeader}>
        <h5 className={styles.InventoryText}>สินค้าคงคลัง</h5>
        <div>
          <input
            type="text"
            className={styles.inputSearchInventory}
            placeholder="ค้นหารหัสสินค้า"
            value={searchTerm}
            onChange={(e) => {
              const term = e.target.value;
              setSearchTerm(term);
              handleSearch(term); // ค้นหาอัตโนมัติเมื่อพิมพ์
            }}
          />
        </div>
      </div>
      <table className={styles.customTable}>
        <thead className={styles.inventoryHeadTable}>
          <tr>
            <th>รหัสสินค้า</th>
            <th>ชื่อสินค้า</th>
            <th>จำนวนคงเหลือ</th>
            <th>สถานะ</th>
            <th>การจัดการ</th>
          </tr>
        </thead>
        <tbody>
          {inventory.length > 0 ? (
            inventory.map((item) => (
              <tr key={item.id}>
                <td>{item.code}</td>
                <td>{item.name}</td>
                <td>{item.quantity}</td>
                <td>{item.status}</td>
                <td>
                  <button
                    className={styles.btnGradientGreen}
                    onClick={() => viewProductHistory(item.id)}
                  >
                    ดูประวัติ
                  </button>
                </td>
              </tr>
            ))
          ) : (
            <tr>
              <td colSpan="5" className={styles.noData}>
                ไม่มีข้อมูลสินค้าคงคลัง
              </td>
            </tr>
          )}
        </tbody>
      </table>
    </div>
  );
}

export default Inventory;
