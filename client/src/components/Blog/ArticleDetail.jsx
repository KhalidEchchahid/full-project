import React from "react";

import moment from "moment";

const ArticleDetail = ({ post }) => {
  // const getContentFragment = (index, text, obj, type) => {
  const getContentFragment = () => {
    let modifiedText = text;
    const index = 1;
    const obj = {};
    const text = "TTTTTT";
    const type = "";

    // if (obj) {
    //   if (obj.bold) {
    //     modifiedText = (<b key={index}>{text}</b>);
    //   }

    //   if (obj.italic) {
    //     modifiedText = (<em key={index}>{text}</em>);
    //   }

    //   if (obj.underline) {
    //     modifiedText = (<u key={index}>{text}</u>);
    //   }
    // }

    switch (type) {
      case "heading-three":
        return (
          <h3 key={index} className="text-xl font-semibold mb-4">
            {modifiedText.map((item, i) => (
              <React.Fragment key={i}>{item}</React.Fragment>
            ))}
          </h3>
        );
      case "paragraph":
        return (
          <p key={index} className="mb-8">
            {modifiedText.map((item, i) => (
              <React.Fragment key={i}>{item}</React.Fragment>
            ))}
          </p>
        );
      case "heading-four":
        return (
          <h4 key={index} className="text-md font-semibold mb-4">
            {modifiedText.map((item, i) => (
              <React.Fragment key={i}>{item}</React.Fragment>
            ))}
          </h4>
        );
      case "image":
        return <img key={index} alt="" height="" width="" src="" />;
      default:
        return modifiedText;
    }
  };

  return (
    <>
      <div className="bg-white shadow-lg rounded-lg lg:p-8 pb-12 mb-8">
        <div className="relative overflow-hidden shadow-md mb-6">
          <img
            src="https://picsum.photos/600/200"
            alt=""
            className="object-top h-full w-full object-cover  shadow-lg rounded-t-lg lg:rounded-lg"
          />
        </div>
        <div className="px-4 lg:px-0">
          <div className="flex items-center mb-8 w-full">
            <div className="hidden md:flex items-center justify-center lg:mb-0 lg:w-auto mr-8 items-center">
              <img
                alt="post.author.name"
                height="30px"
                width="30px"
                className="align-middle rounded-full"
                src="https://picsum.photos/200/200"
              />
              <p className="inline align-middle text-gray-700 ml-2 font-medium text-lg">
                author name
              </p>
            </div>
            <div className="font-medium text-gray-700">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6 inline mr-2 text-pink-500"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
                />
              </svg>
              <span className="align-middle">09-90-9000</span>
            </div>
          </div>
          <h1 className="mb-8 text-3xl font-semibold">post title</h1>
          {/* {post.content.raw.children.map((typeObj, index) => {
            const children = typeObj.children.map((item, itemindex) => getContentFragment(itemindex, item.text, item));

            return getContentFragment(index, children, typeObj, typeObj.type);
          })} */}
          <p className="text-lg text-gray-700 font-normal px-1 lg:px-2 mb-4">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Facere ipsa
            odio assumenda incidunt enim inventore, voluptas recusandae adipisci
            quo tenetur molestiae atque quas neque tempora non tempore
            consequuntur similique velit fuga sed esse. Soluta, libero qui
            similique quos alias officiis ratione dicta magnam dolorum
            consequatur! Iste commodi magni asperiores modi iusto, illum
            repudiandae maiores autem dolore. Quo quis cumque, omnis dolores
            veritatis reprehenderit odit non neque ullam dolorem amet minus
            pariatur quod at quisquam expedita aperiam dignissimos animi ipsa
            unde assumenda nesciunt fugit! Eos repellendus inventore quos quo?
            Sapiente quaerat tenetur suscipit porro ullam ipsum iste culpa
            veritatis, vitae dolore placeat deserunt similique autem voluptates
            praesentium eum repellat nostrum maiores at in! Earum similique
            distinctio aperiam vel, recusandae ipsa nostrum, suscipit quisquam
            eveniet nulla praesentium facilis error incidunt? Pariatur
            architecto suscipit modi unde atque. Nihil quos veritatis nesciunt
            aspernatur perferendis a, eius natus id, vel, aut laboriosam dolorum
            dicta incidunt deleniti officiis quia dignissimos corporis unde in
            libero. Voluptatum suscipit et debitis dolore architecto eveniet
            rerum natus, non provident repudiandae iure temporibus eum est
            ducimus cupiditate autem sunt adipisci maxime necessitatibus
            laboriosam saepe reiciendis ab fugit! Reprehenderit, quas ad, nam
            possimus omnis odio aperiam quod iure in at voluptate soluta!
          </p>
        </div>
      </div>
    </>
  );
};

export default ArticleDetail;
