let isLogin = true;

function toggleForm() {
    isLogin = !isLogin;

    const title = document.getElementById("formTitle");
    const btn = document.getElementById("authBtn");
    const toggle = document.getElementById("toggleText");
    const nameField = document.getElementById("name");

    if (isLogin) {
        title.innerText = "Welcome Back 👋";
        btn.innerText = "Sign In";
        toggle.innerText = "Don’t have an account? Sign Up";
        nameField.style.display = "none";
    } else {
        title.innerText = "Create Account 💜";
        btn.innerText = "Sign Up";
        toggle.innerText = "Already have an account? Sign In";
        nameField.style.display = "block";
    }
}

function handleAuth() {
    const name = document.getElementById("name").value;
    const email = document.getElementById("email").value;
    const password = document.getElementById("password").value;

    if (!email || !password) {
        alert("Please fill all fields");
        return;
    }

    let users = JSON.parse(localStorage.getItem("users")) || [];

    if (isLogin) {
        // LOGIN
        const user = users.find(u => u.email === email && u.password === password);

        if (user) {
            alert("Login Successful 💜");
            localStorage.setItem("currentUser", JSON.stringify(user));
            window.location.href = "index.html";
        } else {
            alert("Invalid Email or Password ❌");
        }

    } else {
        // SIGN UP
        if (!name) {
            alert("Please enter your name");
            return;
        }

        const exists = users.find(u => u.email === email);

        if (exists) {
            alert("User already exists ❗");
            return;
        }

        const newUser = { name, email, password };
        users.push(newUser);

        localStorage.setItem("users", JSON.stringify(users));

        alert("Account Created Successfully 💜");
        toggleForm();
    }
}