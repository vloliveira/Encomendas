import * as S from "./styles";
function Login() {
  return (
    <>
      <div className="container py-4 px-3 mx-auto">
        <h1>Teste</h1>
      </div>
      <S.Section>
        <form class="container">
          <div data-mdb-input-init class="form-outline mb-4">
            <label class="form-label" for="form1Example1">
              Email
            </label>
            <input
              type="email"
              id="form1Example1"
              class="form-control"
              placeholder="exemplo@exemplo.com"
            />
          </div>

          <div data-mdb-input-init class="form-outline mb-4">
            <label class="form-label" for="form1Example2">
              Senha
            </label>
            <input
              type="password"
              id="form1Example2"
              class="form-control"
              placeholder="*********"
            />
          </div>

          <div class="row mb-4">
            <div class="col d-flex justify-content-center">
              <div class="form-check">
                <input
                  class="form-check-input"
                  type="checkbox"
                  value=""
                  id="form1Example3"
                  checked
                />
                <label class="form-check-label" for="form1Example3">
                  {" "}
                  Lembrar de mim{" "}
                </label>
              </div>
            </div>

            <div class="col">
              <a href="#!">Esqueceu a senha?</a>
            </div>
          </div>

          <button
            data-mdb-ripple-init
            type="submit"
            class="btn btn-primary btn-block"
          >
            Entrar
          </button>
        </form>
      </S.Section>
    </>
  );
}
export default Login;
