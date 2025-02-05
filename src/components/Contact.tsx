export default function Contact() {
  return (
    <div className="max-w-2xl mx-auto space-y-6">
      <h2 className="text-3xl font-bold">Contact Me</h2>
      <p>
        Open For Opportunities:{" "}
        <span style={{ color: "rgb(0, 255, 213)", fontWeight: "bold" }}>YES</span>
      </p>

      {/* Contact Form */}
      <form action="https://formsubmit.co/tarakgopi100@gmail.com" method="POST" className="space-y-4">
        <input type="hidden" name="_subject" value="New Contact Form Submission" />
        <input type="hidden" name="_captcha" value="false" />

        {/* Name Field */}
        <div>
          <label htmlFor="name" className="block text-lg font-medium text-white mb-2">
            Full Name
          </label>
          <input
            type="text"
            id="name"
            name="name"
            required
            placeholder="Enter your name"
            className="mt-1 block w-full rounded-lg border-2 border-gray-300 bg-white p-3 text-lg shadow-md 
                      focus:border-indigo-500 focus:ring-2 focus:ring-indigo-500 transition duration-300 
                      ease-in-out transform hover:scale-105 focus:scale-105 placeholder:text-gray-700 
                      focus:placeholder:text-transparent"
            onInput={(e) => {
              const input = e.target as HTMLInputElement;
              input.style.color = 'black';
            }}
          />
        </div>

        {/* Email Field */}
        <div>
          <label htmlFor="email" className="block text-lg text-white font-medium mb-2">
            Email Address
          </label>
          <input
            type="email"
            id="email"
            name="email"
            required
            placeholder="Enter your email"
            className="mt-1 block w-full rounded-lg border-2 border-gray-300 bg-white p-3 text-lg shadow-md 
                      focus:border-indigo-500 focus:ring-2 focus:ring-indigo-500 transition duration-300 
                      ease-in-out transform hover:scale-105 focus:scale-105 placeholder:text-gray-700 
                      focus:placeholder:text-transparent"
            onInput={(e) => {
              const input = e.target as HTMLInputElement;
              input.style.color = 'black';
            }}
          />
        </div>

        {/* Message Field */}
        <div>
          <label htmlFor="message" className="block text-lg text-white font-medium mb-2">
            Message
          </label>
          <textarea
            id="message"
            name="message"
            required
            rows={4}
            placeholder="Enter your message"
            className="mt-1 block w-full rounded-lg border-2 border-gray-300 bg-white p-3 text-lg shadow-md 
                      focus:border-indigo-500 focus:ring-2 focus:ring-indigo-500 transition duration-300 
                      ease-in-out transform hover:scale-105 focus:scale-105 placeholder:text-gray-700 
                      focus:placeholder:text-transparent"
            onInput={(e) => {
              const textarea = e.target as HTMLTextAreaElement;
              textarea.style.color = 'black';
            }}
          />
        </div>

        {/* Submit Button with rgb(0, 255, 213) */}
        <button
          type="submit"
          className="w-full text-black py-2 px-4 rounded-md hover:bg-[#00ffd5] focus:outline-none focus:ring-2 focus:ring-[#00ffd5] focus:ring-offset-2 transition duration-300"
          style={{ backgroundColor: "rgb(0, 255, 213)", fontWeight: "bold" }}
        >
          Send Message
        </button>
      </form>
    </div>
  );
}
