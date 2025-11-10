<?php
declare(strict_types=1);

use Migrations\AbstractMigration;

class CreateFiliais extends AbstractMigration
{
    /**
     * Change Method.
     *
     * More information on this method is available here:
     * https://book.cakephp.org/phinx/0/en/migrations.html#the-change-method
     * @return void
     */
    public function change(): void
    {
        $table = $this->table('filiais');

        $table->addColumn('id_fornecedor', 'integer', [
            'null' => false,
        ]);

        $table->addColumn('name', 'string', [
            'default' => null,
            'limit' => 255,
            'null' => false,
        ]);

        $table->addColumn('ident_fiscal', 'string', [
            'default' => null,
            'limit' => 255,
            'null' => false,
        ]);

        $table->addForeignKey(
                    'id_fornecedor',
                    'fornecedor',
                    'id'
        );

        $table->create();
    }
}
