const mutations = {
  setAnimateClassName: (state, value) => {
    state.animateClassName = value;
    sessionStorage.setItem("animateClassName", value);
  }
};

export default mutations;
