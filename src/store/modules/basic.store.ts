import { VuexModule, Module, Mutation, Action } from "vuex-module-decorators";

@Module({ namespaced: true })
export default class Basic extends VuexModule {
  randomName = 0;

  @Mutation
  setName(id: number) {
    this.randomName = id;
  }

  @Action
  pickName() {
    this.context.commit("setName", Math.floor(Math.random() * 6));
    console.log(this.randomName);
  }
}
