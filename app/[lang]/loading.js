import Modal from "@/components/Modal";
import React from "react";

export default function Loading() {
  return (
    <Modal>
      <div className="flex justify-center item-center rounded-full animate-bounce">
        <div className="animate-pulse size-96 ring-4 flex justify-center items-center rounded-full animate-bounce">
          <div className="animate-ping size-96  ring-4 flex justify-center items-center">
            <div className="animate-ping size-48 rounded-full bg-blue-400/20 ring-4"></div>
          </div>
        </div>
      </div>
    </Modal>
  );
}
