import { useState } from "react";
import { ShieldAlert, CheckCircle2 } from "lucide-react";

export default function AgeGate({ onConfirm }) {
  const [checked, setChecked] = useState(false);

  return (
    <div className="fixed inset-0 z-50 bg-white/95 backdrop-blur flex items-center justify-center p-6">
      <div className="w-full max-w-lg rounded-2xl border border-gray-200 bg-white shadow-xl">
        <div className="p-6">
          <div className="flex items-start gap-3">
            <ShieldAlert className="h-6 w-6 text-rose-500 mt-0.5" />
            <div>
              <h2 className="text-2xl font-semibold tracking-tight">Age verification</h2>
              <p className="text-gray-600 mt-1">
                This demo template does not contain explicit material. By proceeding, you
                confirm you are 18+ and agree to view a safe, non-explicit video showcase.
              </p>
            </div>
          </div>

          <div className="mt-5 flex items-center gap-3">
            <input
              id="agree"
              type="checkbox"
              checked={checked}
              onChange={(e) => setChecked(e.target.checked)}
              className="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-500"
            />
            <label htmlFor="agree" className="text-sm text-gray-700">
              I am 18 or older and agree to the terms.
            </label>
          </div>

          <button
            onClick={() => checked && onConfirm()}
            className={`mt-6 inline-flex items-center gap-2 rounded-md px-4 py-2 text-white transition focus:outline-none focus:ring-2 focus:ring-offset-2 ${
              checked
                ? "bg-indigo-600 hover:bg-indigo-700 focus:ring-indigo-500"
                : "bg-gray-300 cursor-not-allowed"
            }`}
          >
            <CheckCircle2 className="h-4 w-4" />
            Enter
          </button>

          <p className="mt-4 text-xs text-gray-500">
            By entering you acknowledge this is a compliant, non-explicit demo intended for
            showcasing design and functionality only.
          </p>
        </div>
      </div>
    </div>
  );
}
