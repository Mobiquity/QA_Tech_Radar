<template>
 <b-container-fluid class='bv-row'>
  <b-row class='banner' id="brand" align-h="center" align-v="center">
          <h1>QA Tech Radar HUB</h1>
          <h3>MOBIQUITY QA's Timeline</h3>
  </b-row>
    <b-row class='main-content justify-content-center' align-v="center">
        <b-row  style="width: relative" class='justify-content-center'>
        <b-nav-item
          :to='{ name: "FE", params: { page: "Frontend" } }'
          style="list-style-type: none;"
        >
          <b-card  style="max-height: 5rem; min-width: 8rem; border-radius:20%;">
            <b-row class='justify-content-center'>
            <h2>Frontend</h2>
            </b-row>
          </b-card>
        </b-nav-item>
         <b-nav-item
          :to='{ name: "Mobile"}'
          style="list-style-type: none;"
        >
          <b-card  style="max-height: 5rem; max-width: 8rem; border-radius:20%;">
            <b-row class='justify-content-center'>
            <h2>Mobile</h2>
            </b-row>
          </b-card>
        </b-nav-item>
        <b-nav-item
          :to='{ name: "BE"}'
          style="list-style-type: none;"
        >
          <b-card  style="max-height: 5rem; min-width: 8rem; border-radius:20%;">
            <b-row class='justify-content-center'>
            <h2>Backend</h2>
            </b-row>
          </b-card>
        </b-nav-item>
    </b-row>
    </b-row>
  </b-container-fluid>
</template>
