React


Key Changes from react-router-dom v4/5 to v6
// Swith is been replace for Routes (all Route needs to be wrapped on Routes)
// exact, component, render dont work anymore. element needs to be use instead
// Redirect not longer exist, use either Navigate or useNavigate
// no more match available, now use useParams() to get the url params 