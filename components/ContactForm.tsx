"use client";
import SuccessModal from "@/components/SuccessModal";
// import { SuccessModal } from "@/components/SuccessModal";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useRouter } from "next/navigation";
import { useState } from "react";

export const ContactForm = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [status, setStatus] = useState("");
  const router = useRouter();
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleSubmit = async (e: any) => {
    e.preventDefault();
    setStatus("Sending...");
    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ name, email, message }),
      });
      if (response.ok) {
        setStatus("Message sent successfully!");
        // setName("");
        setEmail("");
        setMessage("");
        setIsModalOpen(true);
      } else {
        setStatus(response?.statusText);
      }
    } catch (error) {
      setStatus("Failed to send message.");
    }
  };

  return (
    <>
      <form
        onSubmit={handleSubmit}
        className="max-w-md mx-auto p-4 bg-secondary text-white rounded-lg shadow-md"
      >
        <h2 className="text-2xl font-semibold mb-4 text-center">Contact Me</h2>
        <div className="mb-4">
          <label
            htmlFor="name"
            className="block text-sm font-medium text-gray-300"
          >
            Name
          </label>
          <Input
            type="text"
            id="name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
            className="mt-1 block w-full px-3 py-2 border border-gray-600 rounded-md shadow-sm focus:outline-none focus:ring-gray-500 focus:border-gray-500 bg-gray-700 text-white sm:text-sm"
          />
        </div>
        <div className="mb-4">
          <label
            htmlFor="email"
            className="block text-sm font-medium text-gray-300"
          >
            Email
          </label>
          <Input
            type="email"
            id="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
            className="mt-1 block w-full px-3 py-2 border border-gray-600 rounded-md shadow-sm focus:outline-none focus:ring-gray-500 focus:border-gray-500 bg-gray-700 text-white sm:text-sm"
          />
        </div>
        <div className="mb-4">
          <label
            htmlFor="message"
            className="block text-sm font-medium text-gray-300"
          >
            Message
          </label>
          <Textarea
            id="message"
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            required
            className="mt-1 block w-full px-3 py-2 border border-gray-600 rounded-md shadow-sm focus:outline-none focus:ring-gray-500 focus:border-gray-500 bg-gray-700 text-white sm:text-sm"
          />
        </div>
        <span className="block mb-4 text-gray-400">
          Hey, {name.trim()}
          {name.trim().length !== 0 ? "! " : ""}
          How are you doing?{" "}
          {name.trim().length !== 0 ? "Thanks for reaching out😀" : ""}
        </span>
        <Button
          type="submit"
          className="w-full inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-md font-medium rounded-md text-white bg-skin-fill hover:bg-skin-accent focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-500 transition-transform duration-300 ease-in-out transform hover:scale-105"
        >
          Send
        </Button>
        {status && (
          <p className="mt-4 text-sm font-bold  text-gray-300">{status}</p>
        )}
      </form>
      {isModalOpen && (
        <SuccessModal
          name={name}
          isOpen={true}
          onClose={() => {
            setIsModalOpen(false);
            // router.push("/");
          }}
        />
      )}
    </>
  );
};

// export default ContactForm;
