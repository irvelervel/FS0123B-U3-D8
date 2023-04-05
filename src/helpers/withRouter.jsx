import { useLocation, useNavigate, useParams } from 'react-router-dom'

function withRouter(Component) {
  function ComponentWithRouterProp(props) {
    let location = useLocation()
    let navigate = useNavigate()
    let params = useParams()
    return <Component {...props} router={{ location, navigate, params }} />
  }

  return ComponentWithRouterProp
}

export default withRouter
// questo funzione withRouter crea un H O C
// Higher Order Component

// questa funzione riceve un Class Component, ne crea uno "gemello" come funzione,
// e ritorna il compoenente originale con tutte le sue props PIÙ una prop che
// si chiama router che avrà dentro i 3 oggetti famosi: location, navigate, params
