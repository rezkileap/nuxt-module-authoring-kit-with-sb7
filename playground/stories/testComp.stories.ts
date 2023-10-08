import type { Meta, StoryObj } from '@storybook/vue3'

import testComp from '../../src/runtime/components/testComp.vue'

// More on how to set up stories at: https://storybook.js.org/docs/vue/writing-stories/introduction

const meta = {
  title: 'Example/testComp',
  component: testComp,
  // This component will have an automatically generated docsPage entry: https://storybook.js.org/docs/vue/writing-docs/autodocs
  tags: ['autodocs'],

} satisfies Meta<typeof testComp>

export default meta
type Story = StoryObj<typeof meta>

export const testCompStory: Story = {
  args: {},
}
