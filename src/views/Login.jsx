import { useState } from "react";
import Logo from "./../assets/logo.png";
import background from "./../assets/background-login.gif";
import { motion } from "framer-motion";
import { Login } from "../redux/slices/authSlice";
import { useDispatch } from "react-redux";


export default function LoginUser() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const dispatch = useDispatch();

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const user = await dispatch(Login({ email, password })).unwrap();
      alert(`Usuario logueado: ${JSON.stringify(user)}`);
      console.log("Usuario logueado", user);
    } catch (error) {
      console.log("Error al iniciar sesión:", error.message);
    }

  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-black relative overflow-hidden">
      {/* Fondo decorativo */}
      <div className="absolute inset-0 bg-pokemon-pattern opacity-50">
        <img src={background} alt="Fondo" />
      </div>

      <motion.div
        initial={{ scale: 0.8, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 0.5 }}
        className="bg-white p-8 rounded-2xl shadow-xl relative z-10 text-center"
      >
        <h1 className="text-3xl font-bold text-red-500 mb-4">Pokémon</h1>
        <img src={Logo} alt="Poké Ball" className="w-16 mx-auto mb-4" />

        <form onSubmit={handleSubmit} className="flex flex-col gap-4">
          <input
            type="email"
            placeholder="Correo"
            className="p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-red-500"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
          <input
            type="password"
            placeholder="Contraseña"
            className="p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-red-500"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
          <button
            type="submit"
            className="bg-red-500 text-white py-2 rounded-full hover:bg-red-600 transition hover:scale-105 cursor-pointer"
          >
            Iniciar sesión
          </button>

        </form>
        <div className="mt-4">
          <a href="/PokemonCards/Pokemons">Regresar</a>
        </div>

      </motion.div>
    </div>
  );
}