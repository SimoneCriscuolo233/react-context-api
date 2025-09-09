import { NavLink } from 'react-router-dom';
import { useContext } from 'react';
import { BudgetContext } from '../contexts/BudgetContext';
const links = [
  { id: 1, to: '/', label: 'Home' },
  { id: 2, to: '/about', label: 'Chi siamo' },
  { id: 3, to: '/products', label: 'Prodotti' }
]

const Navbar = () => {
  const { budgetMode, setBudgetMode } = useContext(BudgetContext);

  const toggleBudgetMode = () => {
    setBudgetMode(!budgetMode);
  }


  return (
    <>
      <nav className="navbar navbar-expand navbar-dark bg-dark">
        <div className="container-fluid">
          <span className="navbar-brand">MiniShop</span>
          <ul className="navbar-nav d-flex">
            {links.map((link) => (
              <li key={link.id} className="nav-item">
                <NavLink
                  to={link.to}
                  className={link.to === true ? 'nav-link active fw-bold' : 'nav-link'
                  }
                >{link.label}
                </NavLink>
              </li>
            ))}
          </ul>
          <button
            className="btn btn-outline-light"
            onClick={toggleBudgetMode}
          >
            {budgetMode ? 'Disattiva Modalità Budget' : 'Attiva Modalità Budget'}
          </button>
        </div>
      </nav>
    </>
  );
}
export default Navbar
