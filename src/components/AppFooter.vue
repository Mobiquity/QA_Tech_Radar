<template>
  <footer>
    <b-container-fluid>
      <b-navbar>
      <b-row class='md-start'>
        <ul class='footer-nav'>
          <li><b-nav-item :to='{ name: "/Home"}'
          style="list-style-type: none;">Our Team</b-nav-item></li>
        </ul>
    </b-row>
    <b-row  class='row-copyrights md-start ml-auto mt-auto'>
       <ul class='footer-nav'>
          <li><b-nav-item :to='{ name: "/Home"}'
          style="list-style-type: none;">Copyrights@2020 by Mobiquity.B.V. All rights reserved.</b-nav-item></li>
        </ul>
    </b-row>
    </b-navbar>
    </b-container-fluid>
  </footer>
</template>
