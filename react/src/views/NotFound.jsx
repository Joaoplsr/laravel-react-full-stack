import { Link } from "react-router-dom";
import { motion } from "framer-motion";

export default function NotFound() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-base-200 px-4">
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.4 }}
        className="text-center space-y-6"
      >
        <h1 className="text-6xl font-bold text-primary">404</h1>
        <p className="text-xl text-base-content">Oops! Página não encontrada.</p>
        <Link to="/" className="btn btn-primary">
          Voltar para o início
        </Link>
      </motion.div>
    </div>
  );
}
