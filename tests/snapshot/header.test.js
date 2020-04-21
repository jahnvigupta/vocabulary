import { goTo } from './helpers'

describe('Header', () => {
  it('Big', async () => {
    await goTo(page, 'patterns-header--big')
    const image = await page.screenshot()

    expect(image).toMatchImageSnapshot()
  })

  it('Small', async () => {
    await goTo(page, 'patterns-header--small')
    const image = await page.screenshot()

    expect(image).toMatchImageSnapshot()
  })
})