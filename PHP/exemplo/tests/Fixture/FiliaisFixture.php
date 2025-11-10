<?php
declare(strict_types=1);

namespace App\Test\Fixture;

use Cake\TestSuite\Fixture\TestFixture;

/**
 * FiliaisFixture
 */
class FiliaisFixture extends TestFixture
{
    /**
     * Init method
     *
     * @return void
     */
    public function init(): void
    {
        $this->records = [
            [
                'id' => 1,
                'id_fornecedor' => 1,
                'name' => 'Lorem ipsum dolor sit amet',
                'ident_fiscal' => 'Lorem ipsum dolor sit amet',
            ],
        ];
        parent::init();
    }
}
