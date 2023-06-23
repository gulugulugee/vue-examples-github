<script lang="ts" setup>
import { ref, defineComponent, watch } from 'vue'

interface Courses {
  name: string
  //学分
  credit: number
  //开课学期
  semester?: number
}

const coursesList: Courses[] = [
  {
    name: 'Web前端开发技术',
    credit: 6,
    semester: 1
  },
  {
    name: 'Java程序设计',
    credit: 4,
    semester: 2
  },
  {
    name: '算法设计',
    credit: 5,
    semester: 2
  },
  {
    name: 'Web开发技术',
    credit: 4,
    semester: 3
  },
  {
    name: '服务科学与SOA',
    credit: 4,
    semester: 4
  },
  {
    name: 'Python应用',
    credit: 5,
    semester: 4
  }
]
const refCoursesList = ref(coursesList)
const refChooseList = ref<Courses[]>([])
const fullCredit = ref(0)

const chooseCourses = ref<Courses[]>([])
watch(chooseCourses, () => {
  let full = 0
  chooseCourses.value.forEach((item) => {
    full = full + item.credit
  })
  fullCredit.value = full
  // refChooseList.value.sort((a, b) => a.semester - b.semester)
})
</script>

<template>
  <div class="control">
    <div class="coursesList">
      <p>全部课程</p>
      <p class="no" :class="{ ok: fullCredit > 17 }">已选学分/所需学分：{{ fullCredit }}/17.0</p>
      <template v-for="(item, index) of refCoursesList" :key="index">
        <label>
          <input type="checkbox" v-model="chooseCourses" :value="item" />
          科目：{{ item.name }} - 学分：{{ item.credit }}-学期：{{ item.semester }}
        </label>
        <br />
      </template>
    </div>
    <div class="chooseCourses">
      <p>当前选择的课程</p>
      <template v-for="{ name, credit, semester } of chooseCourses" :key="name">
        <p>科目：{{ name }} - 学分：{{ credit }} -学期：{{ semester }}</p>
      </template>
    </div>
  </div>
</template>

<style scoped>
.coursesList {
  border: 1px solid red;
  width: 400px;
}
/*.chooseCourses {
  border: 1px solid blue;
  margin-left: 400px;
  width: calc(100% - 400px);
  height: 100%;
  margin-top: 200px;
} */
.chooseCourses {
  border: 1px solid red;
  position: absolute;
  top: 9px;
  width: 500px;
  left: 713px;
}
.no {
  color: red;
}
.ok {
  color: green;
}
</style>
