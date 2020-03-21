/* eslint global-require: 0 */
describe('module-poilerplate: index', () => {
  const mocks = {
    files: {
      scaffoldMobile: { run: jest.fn() }
    }
  }

  beforeAll(() => {
    jest.mock('../ScaffoldMobile', () => function ScaffoldMobile () {
      return { run: mocks.files.scaffoldMobile.run }
    })
  })

  test('运行脚手架，调用run方法', () => {
    require('../index')

    expect(mocks.files.scaffoldMobile.run).toHaveBeenCalled()
  })
})
