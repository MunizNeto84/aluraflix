const Login = async (e, email, senha, navigate, login) => {
  e.preventDefault();

  try {
    const response = await fetch(
      "https://api-aluraflix-wojl.onrender.com/login",
      {
        method: "POST",
        headers: { "Content-type": "application/json" },
        body: JSON.stringify({ email, senha }),
      }
    );

    if (response.ok) {
      const data = await response.json();
      login(data.token);
      navigate("/home");
    } else {
      alert("Credenciais inválidas");
    }
  } catch (error) {
    console.error("Erro ao fazer login:", error);
    alert("Erro ao conectar-se ao servidor.");
  }
};

export default Login;
