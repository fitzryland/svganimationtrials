module.exports = function(grunt) {
  grunt.initConfig({
    sass: {
      options: {
        sourceMap: true
      },
      dist: {
        files: {
          'style.css': 'style.scss'
        }
      }
    },
    postcss: {
      options: {
        map: {
            inline: false
        },
        processors: [
          require('autoprefixer')({browsers: 'last 2 versions'}),
        ]
      },
      dist: {
        src: 'style.css'
      }
    },
    watch: {
      sass: {
        files: ['style.scss'],
        tasks: ['sass', 'postcss']
      }
      // scripts: {
      //   files: ['main.js']
      // }
    }
  });
  // load the tasks
  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.loadNpmTasks('grunt-postcss');
  grunt.loadNpmTasks('grunt-sass');
  // make it happen
  grunt.registerTask('default', ['sass', 'postcss', 'watch']);
};