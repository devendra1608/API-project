const url = "https://tpcconfessions.onrender.com/api";

function postConfession() {
  const rollNo = document.getElementById("roll_no").value;
  const confession = document.getElementById("confession").value;

  const payload = {
    roll_no: rollNo,
    confession: confession,
  };

  fetch(`${url}/postConfession`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(payload),
  })
    .then((response) => {
      if (!response.ok) {
        throw new Error(
          `Failed to post confession. Status code: ${response.status}`
        );
      }
      return response.json();
    })
    .then((data) => {
      document.getElementById("response").innerText =
        "Confession posted successfully!";
      document.getElementById("response").style.backgroundColor = "#dff0d8"; // success color
      console.log(data);
    })
    .catch((error) => {
      document.getElementById("response").innerText = `Error: ${error.message}`;
      document.getElementById("response").style.backgroundColor = "#f2dede"; // error color
      console.error("Error:", error);
    });
}

function getConfession() {
  const rollNo = document.getElementById("roll_no").value;

  fetch(`${url}/getConfession?roll_no=${rollNo}`)
    .then((response) => {
      if (!response.ok) {
        throw new Error(
          `Failed to get confession. Status code: ${response.status}`
        );
      }
      return response.json();
    })
    .then((data) => {
      if (data.length > 0) {
        document.getElementById(
          "response"
        ).innerText = `Confession: ${data[0].confession}`;
        document.getElementById("response").style.backgroundColor = "#dff0d8"; 
      } else {
        document.getElementById("response").innerText =
          "No confession found for this roll number.";
        document.getElementById("response").style.backgroundColor = "#fcf8e3";
      }
      console.log(data);
    })
    .catch((error) => {
      document.getElementById("response").innerText = `Error: ${error.message}`;
      document.getElementById("response").style.backgroundColor = "#f2dede"; 
      console.error("Error:", error);
    });
}

