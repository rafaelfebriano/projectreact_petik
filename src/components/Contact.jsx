import React from 'react';

function Contact() {
  return (
    <section id="contact" className="py-16 bg-soft-gray">
      <div className="max-w-4xl mx-auto px-4 sm:px-6">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-dark-blue mb-3">Contact Me</h2>
          <div className="w-20 h-1 bg-accent-blue mx-auto rounded-full"></div>
          <p className="text-gray-600 mt-4">Interested in collaborating? Send us a message!</p>
        </div>

        <div className="bg-white rounded-2xl shadow-md p-6 md:p-8">
          <form>
            <div className="grid md:grid-cols-2 gap-5 mb-5">
              <div>
                <label className="block text-dark-blue font-medium mb-2">Full Name</label>
                <input type="text" placeholder="Your Name" className="w-full px-4 py-3 border border-gray-300 rounded-lg" />
              </div>
              <div>
                <label className="block text-dark-blue font-medium mb-2">Email</label>
                <input type="email" placeholder="email@youremail.com" className="w-full px-4 py-3 border border-gray-300 rounded-lg" />
              </div>
            </div>
            <div className="mb-5">
              <label className="block text-dark-blue font-medium mb-2">Messages</label>
              <textarea rows="4" placeholder="Write your message..." className="w-full px-4 py-3 border border-gray-300 rounded-lg"></textarea>
            </div>
            <button type="submit" className="w-full bg-accent-blue text-white font-semibold py-3 rounded-lg">
              Send Message <i className="fas fa-paper-plane ml-2"></i>
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}

export default Contact;