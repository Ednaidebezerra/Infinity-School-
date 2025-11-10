<?php
declare(strict_types=1);

namespace App\Test\TestCase\Model\Table;

use App\Model\Table\FiliaisTable;
use Cake\TestSuite\TestCase;

/**
 * App\Model\Table\FiliaisTable Test Case
 */
class FiliaisTableTest extends TestCase
{
    /**
     * Test subject
     *
     * @var \App\Model\Table\FiliaisTable
     */
    protected $Filiais;

    /**
     * Fixtures
     *
     * @var array<string>
     */
    protected $fixtures = [
        'app.Filiais',
    ];

    /**
     * setUp method
     *
     * @return void
     */
    protected function setUp(): void
    {
        parent::setUp();
        $config = $this->getTableLocator()->exists('Filiais') ? [] : ['className' => FiliaisTable::class];
        $this->Filiais = $this->getTableLocator()->get('Filiais', $config);
    }

    /**
     * tearDown method
     *
     * @return void
     */
    protected function tearDown(): void
    {
        unset($this->Filiais);

        parent::tearDown();
    }

    /**
     * Test validationDefault method
     *
     * @return void
     * @uses \App\Model\Table\FiliaisTable::validationDefault()
     */
    public function testValidationDefault(): void
    {
        $this->markTestIncomplete('Not implemented yet.');
    }
}
