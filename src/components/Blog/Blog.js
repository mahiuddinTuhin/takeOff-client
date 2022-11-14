import React from "react";
import useDocumentTitle from "../utilities/useDocumentTitle";

const Blog = () => {
  useDocumentTitle(`Blog 🎳 `);
  return (
    <div className="my-24 flex items-center w-1/2 mx-auto">
      <section className="bg-gray-800 text-gray-100 rounded-lg">
        <div className="container flex flex-col items-center justify-center px-4 py-8 mx-auto md:p-8 ">
          <h2 className="text-2xl font-semibold  sm:text-4xl">
            Frequently Asked Questions
          </h2>
          <p className="mt-4 mb-8 text-gray-400">
            Sagittis tempor donec id vestibulum viverra. Neque condimentum
            primis orci at lacus amet bibendum.
          </p>
          <div className="space-y-4">
            <details className="w-full border rounded-lg">
              <summary className="px-4 hover:cursor-pointer py-6 focus:outline-none focus-visible:ring-violet-400">
                {" "}
                What is difference between NoSQL and SQL and MySQL?
              </summary>
              <p className="px-4 py-6 pt-0 ml-4 -mt-4 text-gray-400">
                SQL databases are vertically scalable, while NoSQL databases are
                horizontally scalable. SQL databases are table-based, while
                NoSQL databases are document, key-value, graph, or wide-column
                stores. SQL databases are better for multi-row transactions,
                while NoSQL is better for unstructured data like documents or
                JSON..
              </p>
            </details>
            <details className="w-full border rounded-lg">
              <summary className="px-4 hover:cursor-pointer py-6 focus:outline-none focus-visible:ring-violet-400">
                What is JWT and how it works?
              </summary>
              <p className="px-4 py-6 pt-0 ml-4 -mt-4 text-gray-400">
                What is JWT (JSON Web Token)? JSON Web Token (JWT) is an open
                standard (RFC 7519) for securely transmitting information
                between parties as JSON object. It is compact, readable and
                digitally signed using a private key/ or a public key pair by
                the Identity Provider(IdP)
              </p>
            </details>
            <details className="w-full border rounded-lg">
              <summary className="px-4 hover:cursor-pointer py-6 focus:outline-none focus-visible:ring-violet-400">
                What is difference between express JS and node JS?
              </summary>
              <p className="px-4 py-6 pt-0 ml-4 -mt-4 text-gray-400">
                NodeJS is an event-driven, non-blocking I/O model using
                JavaScript as its main language. It helps to build scalable
                network applications. Express is a minimal and flexible Node. js
                web application framework that provides a robust set of features
                for web and mobile applications.
              </p>
            </details>
            <details className="w-full border rounded-lg">
              <summary className="px-4 hover:cursor-pointer py-6 focus:outline-none focus-visible:ring-violet-400">
                NodeJs multiple request hadler
              </summary>
              <p className="px-4 py-6 pt-0 ml-4 -mt-4 text-gray-400">
                How NodeJS handle multiple client requests? NodeJS receives
                multiple client requests and places them into EventQueue. NodeJS
                is built with the concept of event-driven architecture. NodeJS
                has its own EventLoop which is an infinite loop that receives
                requests and processes them.
              </p>
            </details>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Blog;
