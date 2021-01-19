<template>
  <div class="write-letter-detail">
    <div class="global-header">
      <button type="button" @click="$router.go(-1)">
        <svg-icon slot="prefix" icon-class="chevron-left" class="el-input__icon input-icon"/>
      </button>写信
    </div>
    <div class="container">
      <div class="write-a-content">
        <el-form ref="form">
          <div class="custom-group">
            <div class="title-pre-field">
              <label>标题</label>
              <el-select v-model="selectItem">
                <label slot="prefix">快捷输入</label>
                <el-option v-for="(item, key) in quickInput" :key="key" :label="item.title" :value="key"></el-option>
              </el-select>
            </div>

            <el-form-item>
              <el-input v-model="title" type="textarea" placeholder="请输入标题" v-validate="'required'" name="title" class="title-form"></el-input>
              <div class="el-form-item__error" v-show="errors.has('title')">
                {{ errors.first("title") }}
              </div>
            </el-form-item>
          </div>

          <div class="custom-group">
            <el-form-item label="内容">
              <el-input v-model="description" type="textarea" placeholder="请输入您的详细内容" v-validate="'required'" name="description" class="desc-form"></el-input>
              <div class="el-form-item__error" v-show="errors.has('description')">
                {{ errors.first("description") }}
              </div>
            </el-form-item>
          </div>

          <el-form-item>
            <el-button :loading="loading" type="primary" class="btn-block" @click="submitForm">发送</el-button>
          </el-form-item>
        </el-form>
        
        <!-- <input v-model="form.name"  /> -->
      </div>
    </div>

    <Navigation></Navigation>
  </div>
</template>

<script>
import Navigation from '../../components/Navigation/Navigation.vue'
export default {
  name: 'WriteALetter',
  components: {
    Navigation
  },
  data() {
    return {
      loading: false,
      title: '',
      description: '',
      formSubmit: [],
      selectItem: '',
      quickInput: [
        { title: 'Title 1' },
        { title: 'Title 2' },
        { title: 'Title 3' },
        { title: 'Title 4' },
        { title: 'Title 5' }
      ],
    }
  },
  methods: {
    submitForm(e) {
      this.loading = true;

      this.$validator.validateAll()
       .then((result) => {
          if (result) {
            this.formSubmit.push(
              {
                title: this.title,
                description: this.description
              }
            )

            this.loading = false;

            this.$alert('Your message already submitted.', 'Success', {
              confirmButtonText: 'OK',
              callback: action => {
                this.$router.push({ path: '/' })

                //CLEAR INPUT AFTER SUBMIT
                // this.title = '';
                // this.description = '';
              }
            })

            console.log(this.formSubmit)   
          } else {
            this.loading = false;
            return false
          }
      }); 
      e.preventDefault();
    }
  },
  mounted() {
    this.$root.$validator.localize('en', {
      messages: {
        required: (field) => field
      },
      attributes: { // LOCALIZATION CONTENT VALIDATION
        title: '标题为必填项',
        description: '说明为必填项'
      }
    })
  },
  watch: {
		selectItem(newValue) {
      return this.quickInput[newValue].title ? this.title = this.quickInput[newValue].title : null
    }
  }
}
</script>

<style rel="stylesheet/scss" lang="scss">
  .write-letter-detail {
    margin-bottom: 1.65rem;
  }
  .write-a-content {
    margin-top: .3rem;
  }
  .custom-group {
    background-color: #212534;
    padding: .4rem;
    margin-top: .25rem;
    border-radius: .1rem;
    .el-form-item--small {
      &.el-form-item  {
        margin-bottom: 0;
      }
    }
    .el-textarea__inner {
      background-color: #505771;
      border: none;
      resize: none;
      border: none;
      border-radius: .04rem;
      color: #ffffff;
      font-size: .32rem;
    }
    .title-form {
      .el-textarea__inner {
        height: 1.5rem;
      }
    }
    .desc-form {
      .el-textarea__inner {
        height: 2.5rem;
      }
    }
    ::placeholder {
      color: #bacef1;
    }
    .el-form-item__label {
      line-height: 1em;
      color: #ffffff;
      margin-bottom: .23rem;
      font-size: .32rem;
      color: #bacef1;
    }
    .el-form-item__error {
      top: 107%;
      left: 0;
    }
  }
  .title-pre-field {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: .15rem;
    .el-input__inner {
      background-color: #33bcd4;
      border: none;
      border-radius: .04rem;
      height: .57rem;
      padding-left: .23rem;
      padding-right: 0;
      font-size: 0;
    }
    &:nth-child(1) .el-input__prefix {
      display: flex;
      width: 100%;
      left: 0;
      align-items: center;
      pointer-events: none;
      font-size: .28rem;
      padding-left: .2rem;
      color: #ffffff;
    }
    .el-input {
      width: 1.9rem;
      ::placeholder {
        font-size: 0;
      }
      .el-select__caret {
        color: #ffffff;
      }
    }
    .el-input__suffix {
      top: 50%;
      transform: translate(0, -50%);
      display: flex;
      align-items: center;
      justify-content: center;
      right: .15rem;
      .el-select__caret {
        font-size: .25rem;
        line-height: 1em;
        width: auto;
      }
    }
  }
  .el-select-dropdown__item {
    height: .56rem;
    line-height: .56rem;
    font-size: .30rem;
  }
</style>
