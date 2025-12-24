"use client";

import { useEffect, useState } from "react";
import { api } from "@/lib/api";
import StatusBadge from "@/components/StatusBadge";

export default function OrdersPage() {
  const [orders, setOrders] = useState<any[]>([]);

  useEffect(() => {
    api.get("/orders/user/USER_ID").then(res => setOrders(res.data));
  }, []);

  return (
    <div className="p-8">
      <h1 className="text-3xl font-bold mb-6">الطلبات</h1>

      <div className="bg-slate-900 rounded-xl overflow-hidden">
        <table className="w-full">
          <thead className="bg-slate-800 text-left">
            <tr>
              <th className="p-4">رقم الطلب</th>
              <th className="p-4">المورد</th>
              <th className="p-4">المبلغ</th>
              <th className="p-4">الحالة</th>
            </tr>
          </thead>

          <tbody>
            {orders.map(order => (
              <tr key={order.id} className="border-t border-slate-800">
                <td className="p-4">{order.id.slice(0, 8)}</td>
                <td className="p-4">{order.supplier.name}</td>
                <td className="p-4">${order.total}</td>
                <td className="p-4">
                  <StatusBadge status={order.status} />
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
