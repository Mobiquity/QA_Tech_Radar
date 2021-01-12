<template>
<b-container-fluid class="bv-row">
  <b-row class='banner' id="brand" align-h="center">
          <h1>QA Tech Radar HUB</h1>
          <h3>Web Radar</h3>
  </b-row>
  <b-row>
  <b-col cols="8" align-v="start">
  <svg viewBox="0 0 700 700">
    <!--
      status rings
      -->
    <circle v-for="(status, i) in statuses" :key="status.name"
      class="status-circle"
      :cx="chartRadius + containerOffset"
      :cy="chartRadius + containerOffset"
      :r="chartRadius - (chartRadius / statuses.length * i)"></circle>
    <!--
      category dividers
      -->
    <line v-for="(category, i) in categories" :key="category"
      class="category-radius"
      :x1="calculateCategoryLineXPos(i) + containerOffset"
      :y1="calculateCategoryLineYPos(i) + containerOffset"
      :x2="chartRadius + containerOffset"
      :y2="chartRadius + containerOffset">
    </line>
    <!--
      category labels
      -->
    <text v-for="(category, i) in categories" :key="category + 1"
      class="category-label"
      :x="getCategoryLabelXPos(category, i) + containerOffset"
      :y="getCategoryLabelYPos(category, i) + containerOffset">
      {{ category }}
    </text>
    <!--
      technologies
      -->
    <g v-for="(technology, i) in technologies" :key="technology.name"
      class="pointer">
      <circle class="pointer__circle"
        :fill="getStatusColor(technology.status)"
        :cx="getTechnologyXPos(technology, i) + containerOffset"
        :cy="getTechnologyYPos(technology, i) + containerOffset"
        r="15">
      </circle>
      <text class="pointer__text"
        :x="getTechnologyXPos(technology, i) + containerOffset"
        :y="getTechnologyYPos(technology, i) + containerOffset + pointerSize * 0.5">
        {{ i }}
      </text>
    </g>
    <!--
      status labels
      -->
    <g v-for="(status, i) in statuses" :key="status.name + 1" class="status-label">
      <rect class="status-label__rect"
        :height="labelHeight"
        :width="labelWidth"
        :x="chartRadius - ( labelWidth / 2) + containerOffset"
        :y="getStatusLabelYPos(status, i) + containerOffset"
        rx="5">
      </rect>
      <text class="status-label__text"
        :fill="status.color"
        :font-size="containerSize * 0.023"
        :x="chartRadius + containerOffset"
        :y="getStatusLabelYPos(status, i)  + labelHeight * 0.7 + containerOffset">
        {{ status.name }}
      </text>
    </g>
  </svg>
  </b-col>
  <b-col cols="4" class="radar-legend" align-v="left">
    <div class="category" v-for="(category) in categories" :key="category">
      <h2 class="h2">{{ category }}</h2>
      <div v-for="(technology, index) in technologies" :key="technology.name">
        <div v-if="category === technology.category" class="technology-item" >
        <div class="technology-item__pointer" v-bind:style="{ backgroundColor: getStatusColorForLegend(technology.status ) }">
          {{ index }} </div>
        <div class="technology-item__name"> {{ technology.name }}</div>
        </div>
      </div>
    </div>
    </b-col>
    </b-row>
  </b-container-fluid>
</template>

<script>
import { technologies, statuses, categories } from '@/FrontendData.js'
import * as seedrandom from 'seedrandom'

const random = seedrandom.default('')

const numberCache = {}
// const containerSize = 600
const chartDiameter = 600
const containerOffset = 50

function radians (degrees) {
  return degrees * Math.PI / 180
}

function generateRandomNumber (i) {
  return numberCache[i] ? numberCache[i] : (numberCache[i] = random())
}

export default {
  name: 'radar',
  data: function () {
    return {
      technologies: technologies,
      statuses: statuses,
      categories: categories,
      containerSize: chartDiameter,
      radiansPerCategory: radians(360 / categories.length),
      pointerSize: 10,
      labelWidth: chartDiameter * 0.12,
      labelHeight: chartDiameter * 0.04,
      chartDiameter: chartDiameter,
      chartRadius: chartDiameter / 2,
      containerOffset: containerOffset
    }
  },
  methods: {
    getStatusLabelYPos: function (status, i) {
      const interval = this.chartRadius / this.statuses.length
      const offset = interval / 2 - this.labelHeight / 2
      return interval * i + offset
    },
    getCategoryLabelXPos: function (category, i) {
      const categoryOffset = this.radiansPerCategory / 2
      const angle = this.radiansPerCategory * i + categoryOffset
      return this.chartRadius * Math.cos(angle) + this.chartRadius
    },
    getCategoryLabelYPos: function (category, i) {
      const categoryOffset = this.radiansPerCategory / 2
      const angle = this.radiansPerCategory * i + categoryOffset
      return this.chartRadius * Math.sin(angle) + this.chartRadius
    },
    getCategoryPositionByString: function (category) {
      return this.categories.findIndex(function (element) {
        return element === category
      })
    },
    getStatusPositionByString: function (status) {
      return this.statuses.findIndex(function (element) {
        return element.name === status
      })
    },
    getTechnologyXPos: function (technology, index) {
      const // calculate the angle (radians)
        categoryPosition = this.getCategoryPositionByString(technology.category)
      const categoryOffset = generateRandomNumber(index) * this.radiansPerCategory
      const angle = this.radiansPerCategory * (categoryPosition) + categoryOffset
      const // calculate the radius
        pixelsPerCategory = this.chartRadius / this.statuses.length
      const statusPosition = this.getStatusPositionByString(technology.status)
      const sectorOffset = generateRandomNumber(index) * pixelsPerCategory
      const radius = this.chartRadius - (statusPosition * pixelsPerCategory) - sectorOffset
      return radius * Math.cos(angle) + this.chartRadius
    },
    getTechnologyYPos: function (technology, index) {
      const // calculate the angle (radians)
        categoryPosition = this.getCategoryPositionByString(technology.category)
      const categoryOffset = generateRandomNumber(index) * this.radiansPerCategory
      const angle = this.radiansPerCategory * (categoryPosition) + categoryOffset
      const // calculate the radius
        pixelsPerCategory = this.chartRadius / this.statuses.length
      const statusPosition = this.getStatusPositionByString(technology.status)
      const sectorOffset = generateRandomNumber(index) * pixelsPerCategory
      const radius = this.chartRadius - (statusPosition * pixelsPerCategory) - sectorOffset
      return radius * Math.sin(angle) + this.chartRadius
    },
    calculateCategoryLineXPos: function (categoryIndex) {
      const angle = (360 / this.categories.length) * categoryIndex
      return this.chartRadius * Math.cos(radians(angle)) + this.chartRadius
    },
    calculateCategoryLineYPos: function (categoryIndex) {
      const angle = (360 / this.categories.length) * categoryIndex
      return this.chartRadius * Math.sin(radians(angle)) + this.chartRadius
    },
    getStatusColor: function (status) {
      return this.statuses.find((item) => item.name === status).color
    },
    getStatusColorForLegend: function (status) {
      const res = this.statuses.find((item) => {
        return item.name === status
      })
      return res.color
    }
  }
}
</script>

<style lang="scss">

  svg {
    width: 100%;
    height: auto;
    background-color:#17212a;
    opacity: 0.8;
    margin: 10px;
    border-radius: 10px;
    align-self: center;
  }

  .status-circle {
    fill: #85B5B4;
    stroke: #FFF;
    stroke-width: 2px;
    opacity: 0.5;
  }

  .category-radius {
    stroke: #FFF;
    stroke-width: 2px;
  }

  .category-label {
    fill: #FFF;
    text-anchor: middle;
  }

  .status-label {
    &__rect {
      fill: #FFF;
    }

    &__text {
      text-anchor: middle;
    }
  }

  .pointer {
    &__text {
      fill: #FFF;
      text-anchor: middle;
      font-size: 1em;
    }
  }

.pointer:hover {
    cursor: pointer;
    .pointer__circle {
      fill: #000;
    }
  }

.radar-legend {
  display: flex;
  flex-wrap: wrap;
  justify-content: right;
  max-width: 1000px;
}

.h2 {
  text-transform: capitalize;
  flex-basis: 100%;
  text-align: center;
}

.category {
  flex-basis: 25%;
  border-radius: 10px;
  display: flex;
  flex-wrap: wrap;
  flex-grow: 1;
  margin: 10px;
  padding: 20px;
  align-content: flex-start;
  background: #17212a;
  opacity: 0.8;
}

.technology-item {
    color: white;
    font-family: Arial, Helvetica, sans-serif;
    display: flex;
    padding: 5px 0px;
    flex-basis: 50%;

    &__pointer {
      width: 30px;
      border-radius: 20px;
      padding: 5px;
      text-align: center;
      color: white;
      font-weight: bold;
    }

    &__name {
      padding: 5px;
      margin-left: 10px;
      font-weight: bold;
    }
  }
</style>
