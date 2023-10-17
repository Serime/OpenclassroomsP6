import './Page404.scss';

/**
 * Page "Erreur 404"
 */
function Page404() {
  return (
    <main className='Page404'>
      <h1>404</h1>
      <span>Oups! La page que vous demandez n'existe pas</span>
      <a href='/'>Retourner sur la page d’accueil</a>
    </main>
  );
}

export default Page404;
