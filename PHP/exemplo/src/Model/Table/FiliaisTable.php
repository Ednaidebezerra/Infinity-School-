<?php
declare(strict_types=1);

namespace App\Model\Table;

use Cake\ORM\Query;
use Cake\ORM\RulesChecker;
use Cake\ORM\Table;
use Cake\Validation\Validator;

/**
 * Filiais Model
 *
 * @method \App\Model\Entity\Filiai newEmptyEntity()
 * @method \App\Model\Entity\Filiai newEntity(array $data, array $options = [])
 * @method \App\Model\Entity\Filiai[] newEntities(array $data, array $options = [])
 * @method \App\Model\Entity\Filiai get($primaryKey, $options = [])
 * @method \App\Model\Entity\Filiai findOrCreate($search, ?callable $callback = null, $options = [])
 * @method \App\Model\Entity\Filiai patchEntity(\Cake\Datasource\EntityInterface $entity, array $data, array $options = [])
 * @method \App\Model\Entity\Filiai[] patchEntities(iterable $entities, array $data, array $options = [])
 * @method \App\Model\Entity\Filiai|false save(\Cake\Datasource\EntityInterface $entity, $options = [])
 * @method \App\Model\Entity\Filiai saveOrFail(\Cake\Datasource\EntityInterface $entity, $options = [])
 * @method \App\Model\Entity\Filiai[]|\Cake\Datasource\ResultSetInterface|false saveMany(iterable $entities, $options = [])
 * @method \App\Model\Entity\Filiai[]|\Cake\Datasource\ResultSetInterface saveManyOrFail(iterable $entities, $options = [])
 * @method \App\Model\Entity\Filiai[]|\Cake\Datasource\ResultSetInterface|false deleteMany(iterable $entities, $options = [])
 * @method \App\Model\Entity\Filiai[]|\Cake\Datasource\ResultSetInterface deleteManyOrFail(iterable $entities, $options = [])
 */
class FiliaisTable extends Table
{
    /**
     * Initialize method
     *
     * @param array $config The configuration for the Table.
     * @return void
     */
    public function initialize(array $config): void
    {
        parent::initialize($config);

        $this->setTable('filiais');
        $this->setDisplayField('name');
        $this->setPrimaryKey('id');
    }

    /**
     * Default validation rules.
     *
     * @param \Cake\Validation\Validator $validator Validator instance.
     * @return \Cake\Validation\Validator
     */
    public function validationDefault(Validator $validator): Validator
    {
        $validator
            ->integer('id_fornecedor')
            ->requirePresence('id_fornecedor', 'create')
            ->notEmptyString('id_fornecedor');

        $validator
            ->scalar('name')
            ->maxLength('name', 255)
            ->requirePresence('name', 'create')
            ->notEmptyString('name');

        $validator
            ->scalar('ident_fiscal')
            ->maxLength('ident_fiscal', 255)
            ->requirePresence('ident_fiscal', 'create')
            ->notEmptyString('ident_fiscal');

        return $validator;
    }
}
