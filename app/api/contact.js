// export async function POST(req) {
//     try {
//       const body = await req.json();
      
//       const response = await fetch("https://script.google.com/macros/s/AKfycbyJb8dmVvQYFKhrASbvqGKnFmqXacipCE2g60POhaPXU_GYsAvEcfxueBoEXqrnH67p2A/exec", {
//         method: "POST",
//         headers: {
//           "Content-Type": "application/json",
//         },
//         body: JSON.stringify(body),
//       });
  
//       if (!response.ok) {
//         throw new Error("Failed to submit data");
//       }
  
//       return new Response(JSON.stringify({ message: "Success" }), { status: 200 });
//     } catch (error) {
//       return new Response(JSON.stringify({ error: error.message }), { status: 500 });
//     }
//   }
  