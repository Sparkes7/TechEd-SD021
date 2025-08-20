const images = [
  {
    title: "Night City",
    url: "https://plus.unsplash.com/premium_photo-1669927131902-a64115445f0f?q=80&w=1175&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    thumbnail:
      "https://plus.unsplash.com/premium_photo-1669927131902-a64115445f0f?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8Y2l0eSUyMG5pZ2h0fGVufDB8fDB8fHww",
    altText: "A Night City Skyline",
  },
  {
    title: "Busy Street",
    url: "https://plus.unsplash.com/premium_photo-1666700698946-fbf7baa0134a?q=80&w=736&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    thumbnail:
      "https://plus.unsplash.com/premium_photo-1666700698946-fbf7baa0134a?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8Y2l0eSUyMG5pZ2h0fGVufDB8fDB8fHww",
    altText: "A Busy Street At Night",
  },
  {
    title: "Busy Street",
    url: "https://plus.unsplash.com/premium_photo-1666700698946-fbf7baa0134a?q=80&w=736&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    thumbnail:
      "https://plus.unsplash.com/premium_photo-1666700698946-fbf7baa0134a?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8Y2l0eSUyMG5pZ2h0fGVufDB8fDB8fHww",
    altText: "A Busy Street At Night",
  },
  {
    title: "Night City",
    url: "https://plus.unsplash.com/premium_photo-1669927131902-a64115445f0f?q=80&w=1175&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    thumbnail:
      "https://plus.unsplash.com/premium_photo-1669927131902-a64115445f0f?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8Y2l0eSUyMG5pZ2h0fGVufDB8fDB8fHww",
    altText: "A Night City Skyline",
  },
  {
    title: "Busy Street",
    url: "https://plus.unsplash.com/premium_photo-1666700698946-fbf7baa0134a?q=80&w=736&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    thumbnail:
      "https://plus.unsplash.com/premium_photo-1666700698946-fbf7baa0134a?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8Y2l0eSUyMG5pZ2h0fGVufDB8fDB8fHww",
    altText: "A Busy Street At Night",
  },
  {
    title: "Busy Street",
    url: "https://plus.unsplash.com/premium_photo-1666700698946-fbf7baa0134a?q=80&w=736&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    thumbnail:
      "https://plus.unsplash.com/premium_photo-1666700698946-fbf7baa0134a?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8Y2l0eSUyMG5pZ2h0fGVufDB8fDB8fHww",
    altText: "A Busy Street At Night",
  },
  {
    title: "Night City",
    url: "https://plus.unsplash.com/premium_photo-1669927131902-a64115445f0f?q=80&w=1175&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    thumbnail:
      "https://plus.unsplash.com/premium_photo-1669927131902-a64115445f0f?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8Y2l0eSUyMG5pZ2h0fGVufDB8fDB8fHww",
    altText: "A Night City Skyline",
  },
  {
    title: "Busy Street",
    url: "https://plus.unsplash.com/premium_photo-1666700698946-fbf7baa0134a?q=80&w=736&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    thumbnail:
      "https://plus.unsplash.com/premium_photo-1666700698946-fbf7baa0134a?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8Y2l0eSUyMG5pZ2h0fGVufDB8fDB8fHww",
    altText: "A Busy Street At Night",
  },
  {
    title: "Busy Street",
    url: "https://plus.unsplash.com/premium_photo-1666700698946-fbf7baa0134a?q=80&w=736&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    thumbnail:
      "https://plus.unsplash.com/premium_photo-1666700698946-fbf7baa0134a?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8Y2l0eSUyMG5pZ2h0fGVufDB8fDB8fHww",
    altText: "A Busy Street At Night",
  },
  {
    title: "Night City",
    url: "https://plus.unsplash.com/premium_photo-1669927131902-a64115445f0f?q=80&w=1175&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    thumbnail:
      "https://plus.unsplash.com/premium_photo-1669927131902-a64115445f0f?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8Y2l0eSUyMG5pZ2h0fGVufDB8fDB8fHww",
    altText: "A Night City Skyline",
  },
  {
    title: "Busy Street",
    url: "https://plus.unsplash.com/premium_photo-1666700698946-fbf7baa0134a?q=80&w=736&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    thumbnail:
      "https://plus.unsplash.com/premium_photo-1666700698946-fbf7baa0134a?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8Y2l0eSUyMG5pZ2h0fGVufDB8fDB8fHww",
    altText: "A Busy Street At Night",
  },
  {
    title: "Busy Street",
    url: "https://plus.unsplash.com/premium_photo-1666700698946-fbf7baa0134a?q=80&w=736&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    thumbnail:
      "https://plus.unsplash.com/premium_photo-1666700698946-fbf7baa0134a?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8Y2l0eSUyMG5pZ2h0fGVufDB8fDB8fHww",
    altText: "A Busy Street At Night",
  },
];

console.log(images);
const mainContent = document.querySelector(".middle");

for (i = 0; i < images.length; i++) {
  const box = document.createElement("div");
  box.className = "sizer";

  images[i].id = i;
  const newImage = document.createElement("img");
  newImage.className = "photo";
  newImage.src = images[i].url;
  newImage.alt = images[i].altText;

  box.appendChild(newImage);
  mainContent.appendChild(box);
}
