<template>
  <div>
    <div style='background-color: #a6be3d; padding-top: 30px; padding-bottom: 30px'
          class='tn-container tn-text--center'>
      <h3> .tn-container </h3>
    </div>
    <div style='margin-top: 30px'></div>
    <div class='tn-container'>
      <h2> Basic Pages</h2>
      <pre>
        <code class='html'>
          &lt;div class="tn-container"&gt;
            ...
          &lt;/div&gt;
          &lt;div class="tn-container--fluid"&gt;
            ...
          &lt;/div&gt;
        </code>
      </pre>
      <h2> Dimension</h2>
      <pre>
        <code class='css'>
          @media (min-width: 576px) {
            .tn-container {
              max-width: 540px;
            }
          }
          @media (min-width: 768px) {
            .tn-container {
              max-width: 720px;
            }
          }
          @media (min-width: 992px) {
            .tn-container {
              max-width: 960px;
            }
          }
          @media (min-width: 1200px) {
            .tn-container {
              max-width: 1140px;
            }
          }
        </code>
      </pre>
    </div>
  </div>
</template>
