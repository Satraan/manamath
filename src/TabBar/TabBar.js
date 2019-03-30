import React from 'react';

const TabBar = (props) => {
  return (
    <div class="tabbar">
      <label class="tabbar__item">
        <input type="radio" name="tabbar-a" checked="checked"/>
        <button class="tabbar__button">
          <i class="tabbar__icon ion-stop"></i>
          <div class="tabbar__label">One</div>
        </button>
      </label>

      <label class="tabbar__item">
        <input type="radio" name="tabbar-a"/>
        <button class="tabbar__button">
          <i class="tabbar__icon ion-record"></i>
          <div class="tabbar__label">Two</div>
        </button>
      </label>

      <label class="tabbar__item">
        <input type="radio" name="tabbar-a"/>
        <button class="tabbar__button">
          <i class="tabbar__icon ion-star"></i>
          <div class="tabbar__label">Three</div>
        </button>
      </label>
  </div>
  )
};

export default TabBar;
