export const Login = async (e, email, senha, navigate, login) => {
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

export const Cadastrar = async (e, nomeCompleto, email, senha, navigate) => {
  e.preventDefault();
  const userData = { nomeCompleto, email, senha };

  try {
    const response = await fetch(
      "https://api-aluraflix-wojl.onrender.com/registro",
      {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(userData),
      }
    );

    if (response.ok) {
      navigate("/login");
      alert("Cadastro realizado com sucesso.");
    } else {
      alert("Erro ao cadastrar. verifique os dados.");
    }
  } catch (error) {
    console.error("Error ao cadastrar: ", error);
    alert("Erro no servidor. Tente novamente.");
  }
};
