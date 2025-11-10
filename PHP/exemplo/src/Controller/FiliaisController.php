<?php
declare(strict_types=1);

namespace App\Controller;

/**
 * Filiais Controller
 *
 * @property \App\Model\Table\FiliaisTable $Filiais
 * @method \App\Model\Entity\Filiai[]|\Cake\Datasource\ResultSetInterface paginate($object = null, array $settings = [])
 */
class FiliaisController extends AppController
{
    /**
     * Index method
     *
     * @return \Cake\Http\Response|null|void Renders view
     */
    public function index()
    {
        $filiais = $this->paginate($this->Filiais);

        $this->set(compact('filiais'));
    }

    /**
     * View method
     *
     * @param string|null $id Filiai id.
     * @return \Cake\Http\Response|null|void Renders view
     * @throws \Cake\Datasource\Exception\RecordNotFoundException When record not found.
     */
    public function view($id = null)
    {
        $filiai = $this->Filiais->get($id, [
            'contain' => [],
        ]);

        $this->set(compact('filiai'));
    }

    /**
     * Add method
     *
     * @return \Cake\Http\Response|null|void Redirects on successful add, renders view otherwise.
     */
    public function add()
    {
        $filiai = $this->Filiais->newEmptyEntity();
        if ($this->request->is('post')) {
            $filiai = $this->Filiais->patchEntity($filiai, $this->request->getData());
            if ($this->Filiais->save($filiai)) {
                $this->Flash->success(__('The filiai has been saved.'));

                return $this->redirect(['action' => 'index']);
            }
            $this->Flash->error(__('The filiai could not be saved. Please, try again.'));
        }
        $this->set(compact('filiai'));
    }

    /**
     * Edit method
     *
     * @param string|null $id Filiai id.
     * @return \Cake\Http\Response|null|void Redirects on successful edit, renders view otherwise.
     * @throws \Cake\Datasource\Exception\RecordNotFoundException When record not found.
     */
    public function edit($id = null)
    {
        $filiai = $this->Filiais->get($id, [
            'contain' => [],
        ]);
        if ($this->request->is(['patch', 'post', 'put'])) {
            $filiai = $this->Filiais->patchEntity($filiai, $this->request->getData());
            if ($this->Filiais->save($filiai)) {
                $this->Flash->success(__('The filiai has been saved.'));

                return $this->redirect(['action' => 'index']);
            }
            $this->Flash->error(__('The filiai could not be saved. Please, try again.'));
        }
        $this->set(compact('filiai'));
    }

    /**
     * Delete method
     *
     * @param string|null $id Filiai id.
     * @return \Cake\Http\Response|null|void Redirects to index.
     * @throws \Cake\Datasource\Exception\RecordNotFoundException When record not found.
     */
    public function delete($id = null)
    {
        $this->request->allowMethod(['post', 'delete']);
        $filiai = $this->Filiais->get($id);
        if ($this->Filiais->delete($filiai)) {
            $this->Flash->success(__('The filiai has been deleted.'));
        } else {
            $this->Flash->error(__('The filiai could not be deleted. Please, try again.'));
        }

        return $this->redirect(['action' => 'index']);
    }
}
