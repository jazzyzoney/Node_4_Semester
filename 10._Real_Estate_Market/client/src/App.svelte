<script>
  import { Router, Link, Route } from "svelte-routing";
    import HousingMarket from "./pages/HousingMarket/HousingMarket.svelte";
    import About from "./pages/About/About.svelte";


</script>

<Router>
  <nav>
    <Link to='/'>Home</Link>
    <Link to='/housingmarket'>Housing Market</Link>
    <Link to='/about'>About</Link>
  </nav>
  <div>
    <Route path='/'><h1>welcome to the real estate jungle</h1></Route>
    <Route path='/housingmarket'><HousingMarket /></Route>
    <Link to='/about'><About /></Link>
  </div>
</Router>