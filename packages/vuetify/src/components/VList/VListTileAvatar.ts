// Components
import VAvatar from '../VAvatar'

// Types
import { VNode } from 'vue'

/* @vue/component */
export default VAvatar.extend({
  name: 'v-list-tile-avatar',

  props: {
    horizontal: Boolean,
    size: {
      type: [Number, String],
      default: 40
    }
  },

  computed: {
    classes (): object {
      return {
        'v-list__tile__avatar--horizontal': this.horizontal,
        ...VAvatar.options.computed.classes.call(this),
        'v-avatar--tile': this.tile || this.horizontal
      }
    }
  },

  render (h): VNode {
    const render = VAvatar.options.render.call(this, h)

    render.data = render.data || {}
    render.data.staticClass += ' v-list__tile__avatar'

    return render
  }
})
