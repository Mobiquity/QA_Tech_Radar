<template>
  <header>
  <div id='nav'>
    <b-navbar toggleable='xl' fixed='top' class='navbar-link'>
      <b-navbar-brand id='logo' :to='{ name: "Home" }'>
        <a class='navbar-link'>Mob QA</a>
      </b-navbar-brand>
      <b-navbar-toggle target='nav-collapse'></b-navbar-toggle>
      <b-collapse id='nav-collapse' is-nav>
        <b-navbar-nav id='main-nav' class='ml-auto'>
          <b-nav-item class='nav-item' :to='{ name: "Home" }' position='relative' variant="outline-success">
            Home
          </b-nav-item>
          <b-nav-item class='nav-item' :to='{ name: "FE" }' position='relative' variant="outline-success">
            Web
          </b-nav-item>
          <b-nav-item class='nav-item' :to='{ name: "Mobile" }' position='relative' variant="outline-success">
            Mobile
          </b-nav-item>
           <b-nav-item class='nav-item' :to='{ name: "BE" }' position='relative' variant="outline-success">
            Backend
          </b-nav-item>
        </b-navbar-nav>
      </b-collapse>
    </b-navbar>
  </div>
  </header>
</template>
