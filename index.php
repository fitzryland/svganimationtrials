<!DOCTYPE html>
<html>
  <head>
    <title>Fitz's SVG Animation Trials</title>
    <meta charset="utf-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <link href="https://fonts.googleapis.com/css?family=Slabo+27px" rel="stylesheet">
    <link rel="stylesheet" href="node_modules/normalize.css/normalize.css">
    <link rel="stylesheet" href="style.css">
  </head>
  <body>
    <svg
      id="js-pattern_svg"
      class="pattern_svg"
      xmlns="http://www.w3.org/2000/svg"
      xmlns:xlink="http://www.w3.org/1999/xlink"
    >
      <pattern
        id="pixels_pattern"
        x="0"
        y="0"
        width="30"
        height="30"
        patternUnits="userSpaceOnUse"
      >
        <rect
          class="pixel"
          x="0"
          y="0"
          width="10"
          height="10"
        />
        <rect
          class="pixel"
          x="10"
          y="0"
          width="10"
          height="10"
        />
        <rect
          class="pixel"
          x="20"
          y="0"
          width="10"
          height="10"
        />
        <rect
          class="pixel"
          x="0"
          y="10"
          width="10"
          height="10"
        />
        <rect
          class="pixel"
          x="10"
          y="10"
          width="10"
          height="10"
        />
        <rect
          class="pixel"
          x="20"
          y="10"
          width="10"
          height="10"
        />
        <rect
          class="pixel"
          x="0"
          y="20"
          width="10"
          height="10"
        />
        <rect
          class="pixel"
          x="10"
          y="20"
          width="10"
          height="10"
        />
        <rect
          class="pixel"
          x="20"
          y="20"
          width="10"
          height="10"
        />
      </pattern>
      <rect
        x="0"
        y="0"
        width="100%"
        height="100%"
        fill="url(#pixels_pattern)"
      />
    </svg>
<!--     <svg
      id="js-small_pattern"
      class="small_pattern"
      xmlns="http://www.w3.org/2000/svg"
      xmlns:xlink="http://www.w3.org/1999/xlink"
    >
      <defs>
      </defs>
    </svg> -->
    <nav
      class="
        menu
        is-closed
      "
      id="js-menu"
    >
      <button
        id="js-menu_toggle"
        class="
          menu--toggle
          is-closed
        "
      >
        <object data="burger.svg" type="image/svg+xml"></object>
        <svg
          class="menu--toggle_bg"
          version="1.1"
          xmlns="http://www.w3.org/2000/svg"
          xmlns:xlink="http://www.w3.org/1999/xlink"
          viewBox="0 0 20 20"
          width="100%"
          height="100%"
        >
          <pattern
            id="button_bg_pattern"
            x="0"
            y="0"
            width="20"
            height="20"
            viewBox="0 0 20 20"
            patternUnits="userSpaceOnUse"
          >
            <?php
            for ( $row = 0; $row < 4; $row++ ) :
              for ($col = 0; $col < 4; $col++ ) :
                ?>
                <rect
                  class="menu--toggle_bg_pixel"
                  y="<?php  echo $row * 5; ?>"
                  x="<?php echo $col * 5; ?>"
                  width="5"
                  height="5"
                />
                <?php
              endfor;
            endfor;
            ?>
          </pattern>
          <rect
            x="0"
            y="0"
            width="100%"
            height="100%"
            fill="url(#button_bg_pattern)"
          />
        </svg>
      </button>
      <ul class="menu--list">
        <li class="menu--item">
          <a href="#test" class="menu--link">Home</a>
        </li>
        <li class="menu--item">
          <a href="#test" class="menu--link">Store</a>
        </li>
        <li class="menu--item">
          <a href="#test" class="menu--link">About</a>
        </li>
        <li class="menu--item">
          <a href="#test" class="menu--link">Contact</a>
        </li>
      </ul>
      <svg
        id="js-menu_bg"
        class="menu--bg"
        xmlns="http://www.w3.org/2000/svg"
        xmlns:xlink="http://www.w3.org/1999/xlink"
      >
        <pattern
          id="menu_bg_pattern"
          x="0"
          y="0"
          width="25"
          height="250"
          viewBox="0 0 25 250"
          patternUnits="userSpaceOnUse"
        >
          <?php
          for ( $row = 0; $row < 50; $row++ ) :
            for ($col = 0; $col < 5; $col++ ) :
              ?>
              <rect
                class="menu_bg_pixel"
                y="<?php  echo $row * 5; ?>"
                x="<?php echo $col * 5; ?>"
                width="5"
                height="5"
              />
              <?php
            endfor;
          endfor;
          ?>
        </pattern>
        <rect
          x="0"
          y="0"
          width="100%"
          height="100%"
          fill="url(#menu_bg_pattern)"
        />
      </svg>
    </nav>
    <svg
      id="js-test_svg"
      class="freehand_test"
      xmlns="http://www.w3.org/2000/svg"
      xmlns:xlink="http://www.w3.org/1999/xlink"
    >
      <path
        id="js-test_svg--triangle"
        class="is-down"
        d="
          M2,2
          L102,102
          Q50,150 2,102
          Z
        "
        style="
          stroke: #000000;
          fill: hotpink;
        "
      />
    </svg>
    <svg
      id="js-simple_svg"
      class="simple_svg"
      xmlns="http://www.w3.org/2000/svg"
      xmlns:xlink="http://www.w3.org/1999/xlink"
    >
      <path
        id="js-simple_svg--line"
        class="is-down"
        d="
          M0,0
          L0,0
          L0,100
        "
        style="
          stroke: #000000;
          stroke-width: 10px;
        "
      />
    </svg>
    <div class="spacer"></div>
    <script
      src="https://code.jquery.com/jquery-3.2.1.min.js"
      integrity="sha256-hwg4gsxgFZhOsEEamdOYGBf13FyQuiTwlAQgxVSNgt4="
      crossorigin="anonymous"></script>
    <script
      src="node_modules/snapsvg/dist/snap.svg-min.js"
    ></script>
    <script async src="main.js" type="text/javascript"></script>
  </body>
</html>