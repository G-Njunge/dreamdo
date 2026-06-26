"use client";

import { useState } from "react";
import { useTranslations } from "next-intl";

export default function BookingForm() {
  const t = useTranslations("booking.form");
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");
  const [form, setForm] = useState({
    parentName: "",
    childName: "",
    email: "",
    phone: "",
    preferredDate: "",
    program: "",
    message: "",
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>
  ) => {
    setForm((f) => ({ ...f, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("loading");
    try {
      const res = await fetch("/api/booking", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });
      setStatus(res.ok ? "success" : "error");
    } catch {
      setStatus("error");
    }
  };

  if (status === "success") {
    return (
      <div className="rounded-xl bg-green-50 border border-green-200 p-6 text-green-800 font-medium">
        {t("success")}
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-5">
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
        <div>
          <label htmlFor="parentName" className="block text-sm font-medium text-gray-700 mb-1">
            {t("parentName")} *
          </label>
          <input id="parentName" name="parentName" type="text" required value={form.parentName} onChange={handleChange}
            className="w-full rounded-lg border border-gray-300 px-4 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-brand-blue" />
        </div>
        <div>
          <label htmlFor="childName" className="block text-sm font-medium text-gray-700 mb-1">
            {t("childName")} *
          </label>
          <input id="childName" name="childName" type="text" required value={form.childName} onChange={handleChange}
            className="w-full rounded-lg border border-gray-300 px-4 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-brand-blue" />
        </div>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
        <div>
          <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
            {t("email")} *
          </label>
          <input id="email" name="email" type="email" required value={form.email} onChange={handleChange}
            className="w-full rounded-lg border border-gray-300 px-4 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-brand-blue" />
        </div>
        <div>
          <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-1">
            {t("phone")} *
          </label>
          <input id="phone" name="phone" type="tel" required value={form.phone} onChange={handleChange}
            className="w-full rounded-lg border border-gray-300 px-4 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-brand-blue" />
        </div>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
        <div>
          <label htmlFor="preferredDate" className="block text-sm font-medium text-gray-700 mb-1">
            {t("preferredDate")}
          </label>
          <input id="preferredDate" name="preferredDate" type="date" value={form.preferredDate} onChange={handleChange}
            className="w-full rounded-lg border border-gray-300 px-4 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-brand-blue" />
        </div>
        <div>
          <label htmlFor="program" className="block text-sm font-medium text-gray-700 mb-1">
            {t("program")} *
          </label>
          <select id="program" name="program" required value={form.program} onChange={handleChange}
            className="w-full rounded-lg border border-gray-300 px-4 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-brand-blue bg-white">
            <option value="">{t("programOptions.placeholder")}</option>
            <option value="little-farmers">{t("programOptions.littleFarmers")}</option>
            <option value="ai-explorers">{t("programOptions.aiExplorers")}</option>
            <option value="young-entrepreneurs">{t("programOptions.youngEntrepreneurs")}</option>
            <option value="pathways">{t("programOptions.pathways")}</option>
            <option value="school">{t("programOptions.school")}</option>
            <option value="other">{t("programOptions.other")}</option>
          </select>
        </div>
      </div>
      <div>
        <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">
          {t("message")}
        </label>
        <textarea id="message" name="message" rows={4} value={form.message} onChange={handleChange}
          className="w-full rounded-lg border border-gray-300 px-4 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-brand-blue resize-none" />
      </div>
      {status === "error" && <p className="text-red-600 text-sm">{t("error")}</p>}
      <button type="submit" disabled={status === "loading"} className="btn-primary w-full sm:w-auto disabled:opacity-60">
        {status === "loading" ? "…" : t("submit")}
      </button>
    </form>
  );
}
